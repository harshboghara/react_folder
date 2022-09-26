function Syntxt(popo) {
    return (
        <>
            <div className="row">
                <div className="lable-box">
                    <lable>{popo.name}</lable>
                </div>
                <div className="input-box">
                    <input type={popo.type} />
                </div>
            </div>
        </>

    );
}

export default Syntxt;