import { Combobox } from '@headlessui/react'
import { useEffect, useState } from 'react'
import { getAuthor, getAuthorDetail } from '../../services/authorService'
import { Author } from '../../types/response'


type PublisherInputProps = {
    setSelectedPublisher: (id: number) => void,
    id?: number,
}


export const AuthorInput = (PublisherInputProps: PublisherInputProps) => {
    const [selectedPerson, setSelectedPerson] = useState<Author>({ id: 0, lastName: '', firstName: '', phone: '', address: '', city: '', state: '', zip: '', email: '', bookAuthors: [], })
    const [recomendation, setRecomendation] = useState<Author[]>([])

    const handleChangeInput = async (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target
        const { data, success } = await getAuthor(value ?? '');
        if (success) {
            setRecomendation(data?.items ?? [])
        }
    }

    useEffect(() => {
        const handlePublisherDetail = async (id: number) => {
            const { success, data } = await getAuthorDetail(id.toString())
            if (success) {

                setSelectedPerson(data as Author)
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
            <Combobox.Input displayValue={(a: Author) => a.firstName + " " + a.lastName} onChange={handleChangeInput} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
            <Combobox.Options className="bg-gray-50 border border-gray-300 text-gray-900 p-2 mt-1 text-sm rounded-lg">
                {recomendation.map((person) => (
                    <Combobox.Option key={person.id} value={person} className="cursor-pointer">
                        {`${person.firstName} ${person.lastName}`}
                    </Combobox.Option>
                ))}
            </Combobox.Options>
        </Combobox>
    )
}