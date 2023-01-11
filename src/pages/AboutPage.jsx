import { Link } from "react-router-dom"

const AboutPage = () => {
    return (
        <div className="about-page p-4 my-5">
            <h1 className="text-center">About this project</h1>
            <p className="text-left lead">
                This is a client side React project that constitutes a good
                starter app for those in their starting journey of learning the
                library.
            </p>

            <p className="text-left lead">
                It uses most React basic concepts like Components, Props, Hooks,
                Routing, etc.
            </p>

            <p className="text-left lead">
                <b>
                    Contact me on twitter &nbsp;
                    <a
                        href="https://twitter.com/waelnassaf"
                        target="_blank"
                        rel="noreferrer"
                    >
                        @waelnassaf
                    </a>
                </b>
            </p>

            <Link to="/">Back Home</Link>
        </div>
    )
}

export default AboutPage
