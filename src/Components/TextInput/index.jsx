import './styles.css'

export const TextInput  = ({searchValue, handleChange}) => {
return (
    <input className='inputFormat' value={searchValue} type="search" onChange={handleChange} />
)

}