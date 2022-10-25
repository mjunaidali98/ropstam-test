import React from 'react'
import Header from '../components/header'
import CategoryComponent from '../components/common/table';
import Modal from "../components/categoryModal";
import { useSelector, useDispatch } from 'react-redux'
import { closeModal, openModal, selectCategoryModal, setError } from '../features/categoryModal/categoryModalSlice'

const Categories = ({ heading, data, setData }) => {
    const dispatch = useDispatch()
    const modal = useSelector(selectCategoryModal);


    const handleModal = (value, item) => {
        if (value === "add" || value === "update" || value === "delete") {
            dispatch(openModal({ type: value, item }))
        }
        else {
            dispatch(closeModal())
        }
    }

    const handleSubmit = (value, type) => {
        switch (type) {
            case "add": {
                if (!value.label && value.label.length <= 3) {
                    dispatch(setError("Please enter category name & atleast 3 character long"))
                } else {
                    setData(prev => [...prev, value])
                    dispatch(closeModal())
                }
            }
                break;
            case "update": {
                if (!value.label && value.label.length <= 3) {
                    dispatch(setError("Please enter category name & atleast 3 character long"))
                }
                else {
                    const updatedArray = data.map((item) => {
                        if (item.id === value.id) {
                            return { ...item, ...value }
                        }
                        return item;
                    })
                    setData(updatedArray)
                    dispatch(closeModal())
                }
            }
                break;
            case "delete": {
                setData(data.filter((item) => item.id !== value.id))
                dispatch(closeModal())

            }
                break;
        }
    }
    return (
        <React.Fragment>
            <Header />
            <CategoryComponent
                title='Categories'
                addButtonText='Add Category'
                headingData={heading}
                bodyData={data}
                openModal={handleModal}
            />
            <Modal {...modal} submit={handleSubmit} closeModal={handleModal} />
        </React.Fragment>

    )
}

export default Categories