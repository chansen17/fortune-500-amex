import {useState} from 'react'
import Select from 'react-select';

const options = [
  { value: 'benefit types', label: 'Benefit Types' },
  { value: 'benefits by card', label: 'Benefit by Card' },
  { value: 'useful links', label: 'Useful Links' },
];

export default function SubNav() {
  
  const [selectedOption, setSelectedOption] = useState(null);

  return (
    <div className="w-full min-h-22 bg-white">
        <div className="max-w-[1300px] mx-auto p-5 hidden md:flex items-center text-blue-500 text-md">
            <div className="">
                <a className="p-2 cursor-pointer">Benefit Types</a>
            </div>
            <div className="">
                <a className="p-2 cursor-pointer">Benefits by Card</a>
            </div>
            <div className="">
                <a className="p-2 cursor-pointer">Used Links</a>
            </div>
        </div>
        <div className="md:hidden">
            <Select
                placeholder="Benefit Types"
                className="mx-8 my-4 border-2 border-black/70 rounded-md outline-0"
                defaultValue={selectedOption}
                onChange={setSelectedOption}
                options={options}
            />
        </div>
    </div>
  )
}
