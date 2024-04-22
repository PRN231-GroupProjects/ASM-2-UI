import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { useNavigate } from "react-router-dom";
import { createBookDetail } from "../../services/bookService";
import { UpdateBook } from "../../types/request";
import { PublisherInput } from "../PublisherInput/PublisherInput";
import { AuthorInput } from "../AuthorInput/AuthorInput";

export const BookAdd = () => {
    const [title, setTitle] = useState<string>('');
    const [type, setType] = useState<string>('');
    const [publisherId, setPublisherId] = useState<number>(0);
    const [price, setPrice] = useState<number>(1);
    const [advance, setAdvance] = useState<number>(1);
    const [royalty, setRoyalty] = useState<number>(1);
    const [ytdSales, setYtdSales] = useState<number>(1);
    const [notes, setNotes] = useState<string>('');
    const [authorIds, setAuthorIds] = useState<number[]>([]);



    const [isOpenModal, setIsOpenModal] = useState<boolean>(false)
    const navigate = useNavigate();

    const handleUpdatePublisher = async () => {

        const data: UpdateBook = {
            title: title,
            type: type,
            publisherId: publisherId,
            price: price,
            advance: advance,
            royalty: royalty,
            ytdSales: ytdSales,
            notes: notes,
            publishedDate: new Date().toISOString(),
            authorIds: authorIds
        }
        const res = await createBookDetail(data)

        if (res.data) {
            onClose()
            navigate(0)
        }
    }

    // const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    //     // Convert string back to array
    //     // const newValue: number[] = event.target.value.split(',').map(Number);
    //     setAuthorIds([event.target.value]);
    // };

    const onClose = () => {
        setIsOpenModal(false)
    }

    return (
        <>
            <button className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm sm:w-auto px-10 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={() => { setIsOpenModal(true) }}>Add</button>
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
                                            <p className="block mb-0.5 text-sm font-medium text-gray-900 dark:text-white">Title</p>
                                            <input placeholder='Title' value={title} onChange={
                                                (e) => setTitle(e.target.value)
                                            } required className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                                        </div>
                                        <div>
                                            <p className="block mb-0.5 text-sm font-medium text-gray-900 dark:text-white">Type</p>
                                            <input placeholder='Type' value={type} onChange={
                                                (e) => setType(e.target.value)
                                            } required className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />

                                        </div>

                                        <div>
                                            <p className="block mb-0.5 text-sm font-medium text-gray-900 dark:text-white">Publisher</p>
                                            {/* <input placeholder='Publisher Id' value={publisherId} onChange={
                                                (e) => setPublisherId(Number(e.target.value))
                                            } required type='number' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                                         */}
                                            <PublisherInput setSelectedPublisher={(id: number) => setPublisherId(id)} />
                                        </div>

                                        <div>
                                            <p className="block mb-0.5 text-sm font-medium text-gray-900 dark:text-white">Price</p>
                                            <input placeholder='Price' value={price} onChange={
                                                (e) => setPrice(Number(e.target.value))
                                            } required type='number' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                                        </div>

                                        <div>
                                            <p className="block mb-0.5 text-sm font-medium text-gray-900 dark:text-white">Advance</p>
                                            <input placeholder='Advance' value={advance} onChange={
                                                (e) => setAdvance(Number(e.target.value))
                                            } required type='number' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                                        </div>

                                        <div>
                                            <p className="block mb-0.5 text-sm font-medium text-gray-900 dark:text-white">Royalty</p>
                                            <input placeholder='Royalty' value={royalty} onChange={
                                                (e) => setRoyalty(Number(e.target.value))
                                            } required type='number' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                                        </div>

                                        <div>
                                            <p className="block mb-0.5 text-sm font-medium text-gray-900 dark:text-white">YTD Sales</p>
                                            <input placeholder='YTD Sales' value={ytdSales} onChange={
                                                (e) => setYtdSales(Number(e.target.value))
                                            } required type='number' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                                        </div>

                                        <div>
                                            <p className="block mb-0.5 text-sm font-medium text-gray-900 dark:text-white">Notes</p>
                                            <input placeholder='Notes' value={notes} onChange={
                                                (e) => setNotes(e.target.value)
                                            } required className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                                        </div>

                                        <div>
                                            <p className="block mb-0.5 text-sm font-medium text-gray-900 dark:text-white">Author</p>
                                            {/* <input placeholder='Author Ids' value={authorIds[0]} onChange={
                                                (e) => setAuthorIds([Number(e.target.value)])
                                            } required type='number' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                                         */}
                                            <AuthorInput setSelectedPublisher={(id: number) => setAuthorIds([id])} />
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