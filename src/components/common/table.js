import React, { useEffect } from 'react'
const Table = ({ type, bodyData = [], title = '', addButtonText = '', headingData = [], openModal = () => { } }) => {
    const categoryObject = {
        id: bodyData.length + 1,
        label: ""
    }

    const carObject = {
        id: bodyData.length + 1,
        label: "",
        category: "",
        model: "",
        make_year: "",
        color: "",
        registration_no: ""
    }
    const sampleItem = type === "cars" ? carObject : categoryObject;

    return (
        <div className='container mx-auto w-full'>
            <div className='flex items-center justify-between'>
                <h1 className='text-blue-800 text-5xl my-10'>
                    {title}
                </h1>
                <button onClick={() => openModal("add", sampleItem)} className='flex items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-circle-plus" width="28" height="28" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <circle cx="12" cy="12" r="9" />
                        <line x1="9" y1="12" x2="15" y2="12" />
                        <line x1="12" y1="9" x2="12" y2="15" />
                    </svg>
                    <span>
                        {addButtonText}
                    </span>
                </button>
            </div>
            <table className='w-full'>
                <thead>
                    <tr>
                        {headingData.map((item, idx) => {
                            return (
                                <th key={idx}>
                                    {item}
                                </th>
                            )
                        })}
                    </tr>

                </thead>
                <tbody>
                    {bodyData.map((item, idx) => {
                        return (
                            <tr key={idx}>
                                <td>
                                    {idx + 1}
                                </td>
                                {item.label && <td>
                                    {item.label}
                                </td>
                                }

                                {item.category && <td>
                                    {item.category}
                                </td>
                                }
                                {item.model && <td>
                                    {item.model}
                                </td>
                                }
                                {item.make_year && <td>
                                    {item.make_year}
                                </td>
                                }

                                {item.color && <td>
                                    {item.color}
                                </td>
                                }
                                {item.registration_no && <td>
                                    {item.registration_no}
                                </td>
                                }
                                <td className='flex items-center'>
                                    <span className='space-x-3 flex items-center ' >
                                        <button onClick={() => openModal("update", item)}>
                                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-edit" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2c3e50" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                <path d="M9 7h-3a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-3" />
                                                <path d="M9 15h3l8.5 -8.5a1.5 1.5 0 0 0 -3 -3l-8.5 8.5v3" />
                                                <line x1="16" y1="5" x2="19" y2="8" />
                                            </svg>
                                        </button>
                                        <button onClick={() => openModal("delete", item)}>
                                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-trash" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2c3e50" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                <line x1="4" y1="7" x2="20" y2="7" />
                                                <line x1="10" y1="11" x2="10" y2="17" />
                                                <line x1="14" y1="11" x2="14" y2="17" />
                                                <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
                                                <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
                                            </svg>
                                        </button>
                                    </span>
                                </td>
                            </tr>
                        )
                    })}

                </tbody>
            </table>
        </div>
    )
}

export default Table