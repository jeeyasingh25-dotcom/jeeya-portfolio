const projects=[
{
name:"Cat-Gravy",
desc:"A creative frontend project built with modern UI concepts."
},

{
name:"Cat-Food",
desc:"A responsive food based web interface."
},

{
name:"Moon Bracelet",
desc:"A stylish product showcase website."
}

];


export default function Projects(){

return(

<section id="projects">

<h1>Projects</h1>

<div className="cards">

{
projects.map(project=>(

<div className="card">

<h2>{project.name}</h2>

<p>{project.desc}</p>

<a href="https://github.com/jeeyasingh25-dotcom">
View Github
</a>

</div>

))
}

</div>

</section>

)

}