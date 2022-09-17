import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { RootState } from '../plugins/redux/store';

const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default useAppSelector;
