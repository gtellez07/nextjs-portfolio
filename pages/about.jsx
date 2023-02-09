// this is going to be our /about
// import css module
import styles from '../styles/About.module.css'

export default function About() {
    return (
        <div>
            <h1>About me</h1>
        {/* more than one style can use string interpolation */}
            <p className={styles.coolColor}>I am now a cool software engineer, I make neat stuff with the codes ™️</p>

            <p>{`dont use apostraphes unless theyre in backticks`}</p>

            <h2>I am a different color</h2>
            {/* styled jsx is great for conditional rendering! */}
            <style jsx>{`
                h2 {
                    color: purple;
                }
            `}</style>

            {/* two ways of rendering images: stored locally and a url */}
            <img 
            src="/next.svg" 
            alt="logo of my new favorite framework" 
            />

            {/* getting image from outside source */}
            <img
            src="https://placekitten.com/300/600"
            alt="a magnificent cat"
            />
        </div>
    )
}