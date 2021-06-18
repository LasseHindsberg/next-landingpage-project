import scss from '../styles/pitch.module.scss'
import Image from 'next/image'
export default function Pitch() {
    return(
        <div className={scss.container}>
        <div className={scss.containerLeft}>
        <h1 className={scss.heading}>Quick Transport Through The City</h1>
        <p className={scss.copy}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem sit maiores recusandae in optio, aliquam maxime doloremque delectus iste repellendus voluptates excepturi animi modi, voluptas, error at velit assumenda!</p>

        <p className={scss.copy}>Veniam voluptates quae, accusamus est mollitia voluptate nostrum, cum non ad vero deleniti reprehenderit magni provident! Ratione reprehenderit laboriosam maxime omnis laborum iste eos dolorem ex quibusdam id minima officia excepturi hic, architecto eius. Illo delectus sint, qui aperiam laboriosam modi repellendus dolore suscipit veniam quo rem itaque.</p>
        <p className={scss.copy}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam aut perspiciatis accusamus! Quidem, delectus labore? Quae provident odit laboriosam dolore modi soluta molestiae! Nam perspiciatis animi debitis optio eligendi autem aspernatur? Cupiditate ut nihil magni delectus, porro ratione fugiat rem unde itaque fugit velit iste fuga, consectetur dicta soluta cumque autem inventore eum exercitationem. Tenetur reprehenderit optio officiis repudiandae esse?</p>
        <p className={scss.copy}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore sint possimus minus omnis, nobis sapiente dicta incidunt provident consectetur beatae eius blanditiis ipsam animi eum pariatur porro eligendi dolorum hic recusandae. Fugiat illum adipisci harum!</p>
        </div>
        <div className={scss.image}>
            <Image 
            src="/images/misc/city-life.jpg"
            width={500}
            height={750}
            />
        </div>
        </div>
    )
}