import React, {useState} from 'react'
import {Button, Label, Select, Textarea, TextInput} from "flowbite-react";
import {useLoaderData, useParams} from "react-router-dom";

const EditBook = () => {

    const {id} = useParams();
    const {bookTitle, authorName, imageURL,category, bookDescription, bookPdfUrl} = useLoaderData()

        const bookCategories = [

            "Non-Fiction",
            "Fiction",
            "Programming",
            "Horror",
            "Mistery",
            "Fantasy",
            "Science Fiction",
            "Self-help",
            "Bibliography",
            "Memoir",
            "Bussiness",
            "Children Books",
            "Travel",
            "Religon",
            "Action",
            "Art and Design"

        ]
        const [selectedBookCategory, setSelectedBookCategory]= useState(bookCategories[0]);
        const handleChangeSelectedValue = (event) => {
            console.log(event.target.value);
            setSelectedBookCategory(event.target.value);
        }
    const handlebookSubmit = (event) => {
        event.preventDefault();
        const form = event.target;

        const bookTitle = form.bookTitle.value;
        const authorName = form.authorName.value;
        const imageURL = form.imageURL.value;
        const category = form.categoryName.value;
        const bookDescription = form.bookDescription.value;
        const bookPdfUrl = form.bookPdfUrl.value;

        const updateBookObj = {
            bookTitle, authorName, imageURL, category, bookDescription, bookPdfUrl
        }
        console.log(updateBookObj)
        fetch(`http://localhost:3000/edit-book/${id}`, {
            method: "PATCH",
            headers: {
                "Content-type": "application/json",
            },
            body : JSON.stringify(updateBookObj)
        }).then(res => res.json()).then(data => {
            console.log(data)
            alert('Book updated successfully');
            window.location.replace(`/admin/dashboard/manage`);
        })
    }
  return (
    <div>
        <div className="px-4 my-12">
            <h2 className="mb-8 text-3xl font-bold text-blue-700 uppercase">Update a book</h2>
            <form onSubmit={handlebookSubmit} className="flex lg:w-[1180px] flex-col flex-wrap gap-4 border-blue-300">
                <div className="flex gap-8">
                    <div className='lg:w-1/2'>
                        <div className="mb-2 block">
                            <Label htmlFor="bookTitle" value="Book Title"/>
                        </div>

                            <TextInput style={{height:32}} name="bookTitle" id="bookTitle" type="text" defaultValue={bookTitle} required/>

                    </div>
                    <div className='lg:w-1/2'>
                        <div className="mb-2 block">
                            <Label htmlFor="authorName" value="Author Name"/>
                        </div>
                        <TextInput style={{height:32}} name="authorName" id="authorName" type="text" defaultValue={authorName} required/>
                    </div>
                </div>
                <div className="flex gap-8">
                    <div className="lg:w-1/2">
                        <div className="mb-2 block">
                            <Label  htmlFor="imageURL" value="image URL"/>
                        </div>
                        <TextInput style={{height:32}} name="imageURL" id="imageURL" type="text" defaultValue={imageURL} required/>
                    </div>
                    <div className="lg:w-1/2">
                        <div className="mb-2 block">
                            <Label htmlFor="inputState" value=" Book Category"/>
                        </div>
                        <Select style={{height:32}} id="inputState" name="categoryName" className="w-full rounded"  value={selectedBookCategory}
                                onChange={handleChangeSelectedValue}>
                            {
                                bookCategories.map((option) => <option key={option} value={option}>{option}</option>)
                            }
                        </Select>
                    </div>
                </div>
                <div className="lg:w">
                    <div className="mb:block">
                        <div className="mb-2 block">
                            <Label htmlFor="bookPdfUrl" value=" Book URL"/>
                        </div>
                        <TextInput  style={{height:32}} name="bookPdfUrl" id="bookPdfUrl" type="text" defaultValue={bookPdfUrl} required/>
                    </div>
                </div>
                <div className="lg:w">
                    <div className="mb-2 block">
                        <Label htmlFor="bookDescription" value=" Book Description"/>
                    </div>
                    <Textarea id="bookDescription" name="bookDescription" type="text"
                              defaultValue={bookDescription} required rows={6}/>

                </div>
                <Button  type="submit" className="bg-blue-700 uppercase">
                    sumbit
                </Button>
            </form>
        </div>

    </div>
  )
}
export default EditBook
