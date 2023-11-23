import { FormEvent, useState } from 'react'

export const DemoCreateProduct = () => {
  //   const [newProductName, setNewProductName] = useState<string>('')
  //   const [newProductDescription, setNewProductDescription] = useState<string>('')
  const [newImage, setNewImage] = useState<string | ArrayBuffer | null>('')
  //   const [newPrice, setNewPrice] = useState<number>('')
  //   const [newStockQuantity, setNewStockQuantity] = useState<number>('')

  console.log(newImage)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
  }

  const handleProductImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target
    if (!target.files) {
      return
    }

    const file = target.files[0]
    TranformFile(file)
  }

  const TranformFile = (file: File) => {
    const reader = new FileReader()

    if (file) {
      reader.readAsDataURL(file)
      reader.onloadend = () => {
        setNewImage(reader.result)
      }
    } else {
      setNewImage('')
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      {/* <label>Product Name</label>
      <input type="text" onChange={(e) => setNewProductName(e.target.value)} required />
      <label>Product Description</label>
      <input type="text" onChange={(e) => setNewProductDescription(e.target.value)} required /> */}
      <label>Image</label>
      <input type="file" accept="image/" onChange={handleProductImageUpload} required />
      <div>
        {newImage ? (
          <>
            {' '}
            <img src={newImage as string} alt="product image" />{' '}
          </>
        ) : (
          <p>Image preview will appear here!</p>
        )}
      </div>

      <button type="submit">Submit</button>
    </form>
  )
}
