import { useSelector } from "react-redux"
import { selectIntakeIsUpdate, selectIntakeisLoading } from "redux/intake/intakeSelector"

export const useIntake = () => {
    return {
        isLoading: useSelector(selectIntakeisLoading),
        isUpdating: useSelector(selectIntakeIsUpdate)
    }
}