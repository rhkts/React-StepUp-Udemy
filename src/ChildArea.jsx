const style={
    width:"100%",
    heigth:"200px",
    backgroundColor:"khaki"
}

export const ChildArea = (props) =>{
    const {open} = props;
    return(
        <>
        {open ? (
                <div style={style}>
            <p>子コンポーネント</p>
            </div>
        ) : null}
        </>
    );
};