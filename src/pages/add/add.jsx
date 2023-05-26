import React from 'react'
import "./add.scss"

const add = () => {
    return (
        <div className='add'>
            <div className="container">
                <h1>Add new gig</h1>
                <div className="sections">
                    <div className="left">
                        <label htmlFor="">Tittle</label>
                        <input type="text" placeholder="e.g I will do something I'm really good at" />
                        <label htmlFor="">Category</label>
                        <select name="cats" id="cats">
                            <option value="design">Design</option>
                            <option value="web">Web Dev</option>
                            <option value="uiux">UI/UX</option>
                            <option value="devai">Dev AI</option>
                        </select>
                        <label htmlFor="">Cover Image</label>
                        <input type="file" />
                        <label htmlFor="">Upload Images</label>
                        <input type="file" multiple />
                        <label htmlFor="">Description</label>
                        <textarea name="" id="" cols="30" rows="16" placeholder='Brief descriptions to introduce your service to customer'></textarea>
                        <button>Create</button>
                    </div>
                    <div className="right">
                        <label htmlFor="">Service</label>
                        <input type="text" placeholder='e.g One-page web design' />
                        <label htmlFor="">Short Description</label>
                        <textarea name="" id="" cols="30" rows="10" placeholder='Short descriptions of your service'></textarea>
                        <label htmlFor="">Delivery Time (e.g. 3 days) </label>
                        <input type="text" min={1} />
                        <label htmlFor="">Revision Number</label>
                        <input type="text" min={1} />
                        <label htmlFor="">Add Features</label>
                        <input type="text" placeholder='eg page desting' />
                        <input type="text" placeholder='e.g upload file' />
                        <input type="text" placeholder='e.g setting up a domain' />
                        <input type="text" placeholder='e.g hosting' />
                        <label htmlFor="">Price</label>
                        <input type="text" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default add