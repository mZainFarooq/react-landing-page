import { BellRing  } from 'lucide-react'

export function Alert() {
  return (
    <>
      <div className="  bg-green-900 p-2">
        <div className="flex items-center justify-center space-x-4">
          <div className='flex gap-2'>
         <BellRing color='white'/>
            <p className="text-sm font-medium text-white">
             Enjoy 30% 0ff - Shop now and Save big!
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
