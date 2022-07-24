import React, { Children, useState } from 'react';
import { Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import './styles/CreatePost.css';
const ContentChild = () => {
  return (
    <div className="con-card">
      <input type="text" name="heading" />
      <textarea name="post-content" id="description" rows='10' ></textarea>
    </div>
  )
}



const CreatePost = () => {
  // const [contentChildren, setContentChildren] = useState([]);
  const childData = [
    {
      id: 1,
      inputType: 'text',
      textareaRows: 10
    }
  ]
  const handleAddClick = () => {
    childData.push({
      id: childData[childData.length - 1]
    });
    // console.log(contentChildren);
    // setContentChildren(contentChildren);
  }



  return (
    <div className='createpost-wrapper'>
      <form>
        <div className='input-item'>
          <label htmlFor="title">Post Title : </label>
          <input type="text" id='title' name='post-title' />
        </div>
        <div className='input-item'>
          
          <div className='create-content-label'>
              <label htmlFor="description">Post Content :</label>
              <AddIcon className='add-icon' onClick={() => handleAddClick()} />
              <DeleteIcon className='delete-icon' />
          </div>
          {
            childData.map(child=>{
              return (
                <div key={child.id} className='con-card'>
                  <input type={child.inputType} />
                  <textarea rows={child.textareaRows} ></textarea>
                </div>
              )
            })
          }
        </div>
        <div className='input-item'>
          <label htmlFor='thumbnail'>Thumbnail Photo :</label>
          <input type="file" name="thumbnail-photo" id="thumbnail" />
        </div>
        <div className='create-post-button'>

          <Button className='button' variant='contained' color='success'>Add Post</Button>
        </div>
      </form>
    </div>
  )
}

export default CreatePost;