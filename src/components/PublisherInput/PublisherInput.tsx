import { Combobox } from '@headlessui/react'
import { useEffect, useState } from 'react'
import { getPublisher, getPublisherDetail } from '../../services/publisherService'
import { Publisher } from '../../types/response'


type PublisherInputProps = {
    setSelectedPublisher: (id: number) => void,
    id?: number,
}


export const PublisherInput = (PublisherInputProps: PublisherInputProps) => {
    const [selectedPerson, setSelectedPerson] = useState<Publisher>({ id: 0, name: '', city: '', state: '', country: '', users: [], books: [] })
    const [recomendation, setRecomendation] = useState<Publisher[]>([])

    const handleChangeInput = async (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target
        const { data, success } = await getPublisher(value ?? '');
        if (success) {
            setRecomendation(data?.items ?? [])
        }
    }

    useEffect(() => {
        const handlePublisherDetail = async (id: number) => {
            const { success, data } = await getPublisherDetail(id.toString())
            if (success) {
                setSelectedPerson(data as Publisher)
            }
        }
        if (PublisherInputProps.id) {
            handlePublisherDetail(PublisherInputProps.id)
        }
    }, [PublisherInputProps.id])

    useEffect(() => {
        PublisherInputProps.setSelectedPublisher(selectedPerson.id)
    }, [selectedPerson])

    return (
        <Combobox value={selectedPerson} onChange={setSelectedPerson}>
            <Combobox.Input displayValue={(a: Publisher) => a.name} onChange={handleChangeInput} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
            <Combobox.Options className="bg-gray-50 border border-gray-300 text-gray-900 p-2 mt-1 text-sm rounded-lg">
                {recomendation.map((person) => (
                    <Combobox.Option key={person.id} value={person} className="cursor-pointer">
                        {person.name}
                    </Combobox.Option>
                ))}
            </Combobox.Options>
        </Combobox>
    )
}