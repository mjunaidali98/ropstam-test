import React, { useEffect, useState } from 'react'

const Index = ({ type, value, item, error, submit = () => { }, closeModal = () => { }, categories = [] }) => {
  const [car, setCar] = useState(null);
  useEffect(() => {
    if (item) {
      setCar({ ...item });
    }
  }, [item])

  useEffect(() => {
    if (error) {
      console.log("error", error)
    }
  }, [error])

  const handleInput = (value, key) => {
    setCar(prev => ({ ...prev, [`${key}`]: value }))
  }
  const submitForm = (e) => {
    e.preventDefault();
    submit(car, type);
  }

  return (
    <React.Fragment>
      {value && type && item ?
        <div className='absolute inset-0 w-full h-full bg-black bg-opacity-70 z-30'>
          <div className='w-full h-full flex flex-col items-center justify-center '>
            <div className='bg-white p-8 relative rounded w-1/2'>
              <h1 className='capitalize text-4xl'>
                {`${type} Car`}
              </h1>
              <form onSubmit={(e) => submitForm(e)}
                className='py-5 flex flex-col space-y-4'>
                <input
                  type={"text"}
                  disabled={type === "delete"}
                  onChange={(e) => handleInput(e.target.value, "label")}
                  value={car?.label}
                  required={true}
                  placeholder="Enter Car Name"
                  className={`${type === "delete" ? "" : "border p-2 text-base rounded"} outline-none`}
                />
                <select required={true} value={car?.category} onChange={(e) => handleInput(e.target.value, "category")} className={`${type === "delete" ? "" : "border p-2 text-base rounded"} outline-none`}>
                  <option selected disabled value={''}>Select Category</option>
                  {categories.map((item, key) => {
                    return (
                      <option key={key} value={item.label}>
                        {item.label}
                      </option>
                    )
                  })}
                </select>

                <input
                  type={"text"}
                  disabled={type === "delete"}
                  onChange={(e) => handleInput(e.target.value, "model")}
                  value={car?.model}
                  required={true}
                  placeholder="Enter car model"
                  className={`${type === "delete" ? "" : "border p-2 text-base rounded"} outline-none`}
                />

                <input
                  type={"text"}
                  disabled={type === "delete"}
                  onChange={(e) => handleInput(e.target.value, "make_year")}
                  value={car?.make_year}
                  required={true}
                  placeholder="Enter car make year"
                  className={`${type === "delete" ? "" : "border p-2 text-base rounded"} outline-none`}
                />

                <input
                  type={"text"}
                  disabled={type === "delete"}
                  onChange={(e) => handleInput(e.target.value, "color")}
                  value={car?.color}
                  required={true}
                  placeholder="Enter car color"
                  className={`${type === "delete" ? "" : "border p-2 text-base rounded"} outline-none`}
                />

                <input
                  type={"text"}
                  disabled={type === "delete"}
                  onChange={(e) => handleInput(e.target.value, "registration_no")}
                  value={car?.registration_no}
                  required={true}
                  placeholder="Enter car registration no"
                  className={`${type === "delete" ? "" : "border p-2 text-base rounded"} outline-none`}
                />
                {error && error ? <p>
                  {error}
                </p> : null}
                <button type='submit' className='capitalize focus:outline-none bg-black text-white hover:text-black border-white hover:bg-white border-2 py-2 hover:border-black transition-all ease-in-out duration-300'>
                  {`${type} Car`}
                </button>

                <button type={"reset"} onClick={() => closeModal("close")} className='focus:outline-none bg-transparent text-black hover:text-white border-black hover:bg-black border-2 py-2 transition-all ease-in-out duration-300'>
                  Cancel
                </button>
              </form>

              <div onClick={() => closeModal("close")} className='absolute top-2 right-2'>
                <svg role={"button"} xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-x" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#000" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </div>
            </div>
          </div>
        </div> :
        null
      }
    </React.Fragment>

  )
}

export default Index