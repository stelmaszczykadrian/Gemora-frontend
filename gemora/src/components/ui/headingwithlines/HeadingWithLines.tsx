import './HeadingWithLines.css'
const HeadingWithLines = ({ name }: { name: string }) => {
    return (
        <div className="container">
            <h2 className="heading-with-lines">
            <span>
                <span className="line"></span>
                {name}
                <span className="line"></span>
            </span>
            </h2>
        </div>
    );
}
export default HeadingWithLines;