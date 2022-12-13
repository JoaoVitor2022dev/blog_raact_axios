// estado de valores dos inputs 
import { useState } from "react";

// conexao com api de dados
import blogFetch from "../axios/axios";

// rota de newpost 
import { useNavigate } from "react-router-dom";

// import de style
import "./NewPost.css"; 


const NewPost = () => {

   const navigate = useNavigate(); 

   const [title, setTitle] = useState();
   const [body, setBody] = useState(); 
    
  const createPost =  async (event) => {
    event.preventDefault(); 
    
    // criando um objeto para o mandar por meio da api os dados...
    const post = { title , body , userId: 1}; 

    await blogFetch.post("/posts" , {
      body: post, 
    }); 
  };  

  return (
    <div className="new-post">
      <h2>Inserirndo Post:</h2>
        <form onSubmit={ (event) => createPost(event)}>
          <div className="form-control">
             <label htmlFor="title">Título:</label>
               <input type="text"
               name="title"
               id="title"
               placeholder="Digite o título"
               onChange={ (event) => setTitle(event.target.value)}
               />
          </div>
          <div className="form-control">
             <label htmlFor="body">Conteúdo:</label>
               <textarea name="body"
               id="body"
               placeholder="Digite o conteúdo"
               onChange={ (event) => setBody(event.target.value)}
               ></textarea>
          </div>
          <input type="submit"  value="Criar Post" className="btn"/>
        </form>
    </div>
  )
}

export default NewPost; 
