import { Rings, LineWave, ThreeDots, TailSpin } from "react-loader-spinner";

export function LoadingRings() {
    return (
        <Rings
            height="50vh"
            width="50vw"
            color="#ccac00"
            radius="24"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
            ariaLabel="rings-loading"
        />
    );
}

export function LoadingLineWave() {
    return (
        <LineWave
            height="50vh"
            width="50vw"
            color="#ccac00"
            ariaLabel="line-wave"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
            background-color="black"
        />
    );
}

export function LoadingThreeDots() {
    return (
        <ThreeDots
            height="20"
            width="20"
            radius="6"
            color="#ccac00"
            ariaLabel="loading"
            background-color="transparent"
        />);
}

export function LoadingCircle() {
    return (
        <TailSpin
            height="60"
            width="60"
            color="#fff"
            ariaLabel="tail-spin-loading"
            radius="1"
            // wrapperStyle={{}}
            // wrapperClass=""
            visible={true}
        />
    );
}