import css from "./CafeInfo.module.css"

const CafeInfo = () => {
    return (
        <>
            <h1>Sip Happens Cafe</h1>
            <p className={css.description}>
                Please rate our service by selecting one of the options below.
            </p>
        </>
    )
}
export default CafeInfo;