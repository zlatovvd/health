import { useSelector } from "react-redux"
import { selectIntakeisLoading } from "redux/intake/intakeSelector"

export const useIntake = () => {
    return {
        isLoading: useSelector(selectIntakeisLoading)
    }
}