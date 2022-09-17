import { useDispatch } from 'react-redux';
import type { AppDispatch } from '../plugins/redux/store';

const useAppDispatch: () => AppDispatch = useDispatch;

export default useAppDispatch;
