import { useEffect, useState } from "react";
import { Text, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"


function clock() {
    // let time = new Date;
    // let hrs = time.getHours();
    // let min = time.getMinutes();
    // let s = time.getSeconds();

    let [timer, setTimer] = useState(new Date());

    // setInterval(() => {
    //     setTimer(timer++);
    //     if(timer > 59){
    //         min++;
    //         setTimer(0);
    //     }
    // }, 1000)

    useEffect(() => {
        let ti = setInterval(() => {
            setTimer(new Date());
        }, [1000])
    }, [])

    let hrs = timer.getHours();
    let min = timer.getMinutes();
    let s = timer.getSeconds();

    return (
        <SafeAreaView className="p-3 w-full h-full flex flex-col items-center justify-center bg-gray-900 ">
            <View className=" w-52 h-52 flex flex-row justify-center items-center rounded-full bg-gray-600 border border-white">
                <Text className="text-white text-5xl font-semibold">
                    {hrs} : {min < 10 ? `0${min}` : min}.{s}
                </Text>
            </View>
        </SafeAreaView>
    )
}

export default clock