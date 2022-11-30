import './write.css';

export default function Write() {
  return (
    <div className="write">
        <img className="writeImg" src="https://images.unsplash.com/photo-1616080409883-a96ae084a7e1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8bmF0dXJhbCUyMGJlYXV0eXxlbnwwfHwwfHw%3D&w=1000&q=80" alt="" srcset="" />
        <form className="writeForm">
            <div className="writeFormGroup">
                <label htmlFor='fileInput'>
                    <i class="writeIcon fa-solid fa-plus"></i>
                </label>
                <input type="file" id="fileInput" style={{display:"none"}}/>
                <input type="text" placeholder='Title' className="writeInput"
                autoFoucs={true}/>
            </div>

            <div className="writeFormGroup">
                <textarea placeholder='Tell your story...' type="text" className='writeInput writeText'/>
            </div>

            <button className="writeSubmit">Publish</button>
        </form>
    </div>
  )
}
