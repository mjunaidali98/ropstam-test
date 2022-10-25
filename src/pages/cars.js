import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import CarsComponent from '../components/common/table';
import Header from '../components/header';
import { selectCarModal, closeModal, openModal, setError } from '../features/carModal/carModalSlice';
import Modal from "../components/carModal"

const Cars = ({ heading, data, setData, categories = [] }) => {
    const dispatch = useDispatch()
    const modal = useSelector(selectCarModal);


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
            <CarsComponent
                type="cars"
                title='Cars'
                addButtonText='Add Cars'
                headingData={heading}
                bodyData={data}
                openModal={handleModal}
            />
            <Modal {...modal} submit={handleSubmit} closeModal={handleModal} categories={categories} />
        </React.Fragment>

    )
}

export default Cars