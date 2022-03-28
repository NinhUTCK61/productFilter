import style from './global.module.css'
function Global({children}) {
    return (
        <div className={style.Global}>
            {children}
        </div>
    )
}
export default Global;