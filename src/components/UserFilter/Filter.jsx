import PropTypes from 'prop-types';
import { useDispatch,useSelector } from 'react-redux';
import { LabelFilter } from "./Filter.styled"
import { Input } from "../PhoneContactForm/ContactForm.styled";
import { setFilter } from 'components/Redux/sliceContacts';
import { getFilter } from 'components/Redux/sliceContacts';

export const Filter=({title,id})=>{
    const dispatch=useDispatch()
    const filter=useSelector(getFilter)

    return (<><LabelFilter htmlFor={id}>{title}</LabelFilter>
    <Input
    type='text' 
    name='filter' 
    onChange={(e)=>dispatch(setFilter(e.currentTarget.value))} 
    value={filter}
    id={id}
    /></>)}

    Filter.propTypes={
        title:PropTypes.string.isRequired,
        id:PropTypes.string.isRequired
    }