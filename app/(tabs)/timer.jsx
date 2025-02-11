import { useEffect, useState } from "react"
import { ScrollView, Text, TouchableOpacity, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

function Timer() {

  let [timer, setTimer] = useState(0);
  let [isRunning, setIsRunning] = useState(false);
  let [isPaused, setIsPaused] = useState(false);
  let [minutes, setMinutes] = useState(0);


  useEffect(() => {
    let ti;
    if (isRunning) {
      ti = setInterval(() => {
        setTimer(prev => prev + 1);

      }, 1000)
    }
    else {
      setTimer(0);
    }
    if (isPaused) {
      clearInterval(ti);
    }

    return () => clearInterval(ti);
  }, [isRunning, isPaused])

  useEffect(() => {
    if (timer > 59) {
      setMinutes(prev => prev + 1)
      setTimer(0);
    }
  }, [timer])



  return (
    <SafeAreaView className="p-3 w-full h-full flex flex-col items-center justify-center bg-gray-900 ">
      <Text className="text-white">
        {/* Hello from timer router */}
      </Text>
      <View className="p-2 w-40 h-40 flex flex-row justify-center items-center rounded-full bg-gray-600 border border-white">
        <Text className="text-white text-5xl font-semibold">
        {minutes} : {timer < 10 ? `0${timer}` : timer}
        </Text>
        {/* <Text className="text-white ml-2 text-5xl font-semibold">
          {timer}
        </Text> */}
      </View>

      <View className="flex flex-row w-full items-center justify-between mt-4 p-4 ">
        <TouchableOpacity className="p-3 bg-green-600 rounded-full items-center flex mr-2 flex-1"
          onPress={() => setIsRunning(true)}
        >
          <Text className="text-white text-lg font-semibold">
            Start Timer
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          className="p-3 rounded-full ml-2 flex-1 bg-red-600 items-center flex "
          onPress={() => setIsRunning(false)}
        >
          <Text className="text-white text-lg font-semibold">
            Reset Timer
          </Text>
        </TouchableOpacity>
      </View>

      <View className="w-full p-3">
        <TouchableOpacity
          className="p-3 px-6 w-full rounded-full bg-blue-600 items-center flex"
          onPress={() => setIsPaused(!isPaused)}
        >
          <Text className="text-white text-lg font-semibold">
            {
              isPaused ? (
                <>
                  Resume Timer
                </>
              )
                :
                (
                  <>
                    Pause Timer
                  </>
                )
            }
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default Timer