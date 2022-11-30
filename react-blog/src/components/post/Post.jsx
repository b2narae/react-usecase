import './post.css'

export default function Post() {
  return (
    <div className="post">
        <img src="https://images.unsplash.com/photo-1509043759401-136742328bb3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80" alt="" className="postImg" />
        <div className="postInfo">
            <div className="postCats">
                <span className="postCat">Music</span>
                <span className="postCat">Life</span>
            </div>
            <span className="postTitle">
                Lorem
            </span>
            <hr/>
            <span className="postDate">1 hour ago</span>
        </div>
        <p className='postDesc'>
            djaskjvlsdljvdkasfl
            asdjkfdsjaflddjaskj
            vlsdljvdkasflasdjkfdsjaflddjaskjvl
            sdljvdkasflasdjkfdsjaflddjaskjvlsdl
            jvdkasflasdjkfdsjaflddjaskjvlsdljvd
            kasflasdjkfdsjafld
            jaskjvlsdljvdkasfl
            asdjkfdsjaflddjaskj
            vlsdljvdkasflasdjkfdsjaflddjaskjvl
            sdljvdkasflasdjkfdsjaflddjaskjvlsdl
            jvdkasflasdjkfdsjaflddjaskjvlsdljvd
            kasflasdjkfdsjafld
        </p>
    </div>
  )
}
