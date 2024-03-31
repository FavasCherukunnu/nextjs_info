import { LoginForm } from './components/form'

export default function Page() {
  return (
    <div className=' h-screen w-full flex justify-center items-center'>
        <div className=' border border-gray-600/50  bg-gray-100 px-5 pt-3 pb-5 flex flex-col min-w-[300px]'>
            <div className=' w-full  text-xl font-bold text-center mb-2'> LOGIN</div>
            <LoginForm/>
        </div>
    </div>
  )
}
