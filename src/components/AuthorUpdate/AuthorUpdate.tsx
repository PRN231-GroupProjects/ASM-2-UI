import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAuthorDetail, updateAuthorDetail } from "../../services/authorService";
import { UpdateAuthor } from "../../types/request";

export const AuthorUpdate = ({ id }: { id: string }) => {
    const [lastName, setLastName] = useState<string>('');
    const [firstName, setFirstName] = useState<string>('');
    const [phone, setPhone] = useState<string>('');
    const [address, setAddress] = useState<string>('');
    const [city, setCity] = useState<string>('');
    const [state, setState] = useState<string>('');
    const [zip, setZip] = useState<string>('');
    const [email, setEmail] = useState<string>('');


    const [isOpenModal, setIsOpenModal] = useState<boolean>(false)
    const navigate = useNavigate();

    const handleUpdatePublisher = async () => {

        if (!lastName || !firstName || !phone || !address || !city || !state || !zip || !email || phone.length !== 10 || zip.length !== 5) {
            alert('Please fill all the fields')
            return
        }

        const data: UpdateAuthor = {
            firstName: firstName,
            lastName: lastName,
            phone: phone,
            address: address,
            city: city,
            state: state,
            zip: zip,
            email: email
        }
        const res = await updateAuthorDetail(id, data)
        if (res.data) {
            onClose()
            navigate(0)
        }

    }

    useEffect(() => {
        const handleAuthorDetail = async (id: string) => {
            const { success, data } = await getAuthorDetail(id)
            if (success) {
                setFirstName(data?.firstName as string)
                setLastName(data?.lastName as string)
                setPhone(data?.phone as string)
                setAddress(data?.address as string)
                setZip(data?.zip as string)
                setEmail(data?.email as string)
                setCity(data?.city as string)
                setState(data?.state as string)
            }
        }
        handleAuthorDetail(id)
    }, [id])

    const onClose = () => {
        setIsOpenModal(false)
    }

    return (
        <>
            <button className="text-[#2ba7ff]" onClick={() => { setIsOpenModal(true) }}>Edit</button>
            <Transition appear show={isOpenModal} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={onClose}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black/70 z-100" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full transform overflow-hidden rounded-lg border border-[#49494d] bg-[#FFF] p-6 text-left align-middle shadow-xl transition-all lg:w-[692px]">
                                    <div className='flex flex-col gap-2 p-2'>
                                        <h1 className='font-bold text-lg'>Update Publisher</h1>
                                        <div>
                                            <p className="block mb-0.5 text-sm font-medium text-gray-900 dark:text-white">Last name</p>
                                            <input placeholder='Last Name' value={lastName} onChange={
                                                (e) => setLastName(e.target.value)
                                            } required className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                                        </div>

                                        <div>
                                            <p className="block mb-0.5 text-sm font-medium text-gray-900 dark:text-white">First name</p>
                                            <input placeholder='First Name' value={firstName} onChange={
                                                (e) => setFirstName(e.target.value)
                                            } required className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                                        </div>

                                        <div>
                                            <p className="block mb-0.5 text-sm font-medium text-gray-900 dark:text-white">Phone</p>
                                            <input placeholder='Phone' value={phone} onChange={
                                                (e) => setPhone(e.target.value)
                                            } required className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                                        </div>

                                        <div>
                                            <p className="block mb-0.5 text-sm font-medium text-gray-900 dark:text-white">Address</p>
                                            <input placeholder='Address' value={address} onChange={
                                                (e) => setAddress(e.target.value)
                                            } required className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                                        </div>

                                        <div>
                                            <p className="block mb-0.5 text-sm font-medium text-gray-900 dark:text-white">City</p>
                                            <input placeholder='City' value={city} onChange={
                                                (e) => setCity(e.target.value)
                                            } required className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                                        </div>

                                        <div>
                                            <p className="block mb-0.5 text-sm font-medium text-gray-900 dark:text-white">State</p>
                                            <input placeholder='State' value={state} onChange={
                                                (e) => setState(e.target.value)
                                            } required className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                                        </div>

                                        <div>
                                            <p className="block mb-0.5 text-sm font-medium text-gray-900 dark:text-white">Zip</p>
                                            <input placeholder='Zip' value={zip} onChange={
                                                (e) => setZip(e.target.value)
                                            } required className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                                        </div>

                                        <div>
                                            <p className="block mb-0.5 text-sm font-medium text-gray-900 dark:text-white">Email</p>
                                            <input placeholder='Email' value={email} onChange={
                                                (e) => setEmail(e.target.value)
                                            } required className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                                        </div>


                                        <button className="bg-[#f93c65] text-white p-2 rounded-md w-full"
                                            onClick={() =>
                                                handleUpdatePublisher()
                                            }>
                                            Submit
                                        </button>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}