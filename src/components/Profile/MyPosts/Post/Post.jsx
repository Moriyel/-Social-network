import a from './Post.module.css';

const Post = (props) => {
  return (

    <div className={a.item}>
      <img src='https://avatarko.ru/img/kartinka/2/Gubka_Bob.jpg' />
      {props.message}
      <div>
        <span>Like:  
          {props.like}
        </span>
      </div>
    </div>

  );
}


export default Post;