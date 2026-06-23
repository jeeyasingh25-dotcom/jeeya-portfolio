const skills=[
"React",
"Figma",
"Frontend Development",
"Stack Development",
"AI Basics"
];


export default function Skills(){

return(

<section id="skills">

<h1>Skills</h1>

<div className="cards">

{
skills.map(skill=>(
<div className="card">
{skill}
</div>
))
}

</div>

</section>

)

}