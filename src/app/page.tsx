const Page = () => {
  return (
    <div className="w-screen h-screnn p-5 bg-gray-900">
      <div className="mt-5">
        <h1 className="text-3xl font-bold text-center">Sistema de login</h1>
        <div className="my-6">
          <label htmlFor="emailField" className="block text-lg mb-2">Endereço de email</label>
          <input className="w-full p-2 rounded-md text-lg bg-gray-800 border-gray-600 outline-yellow-500" type="email" id="emailField" />
        </div>
        <div>
          <label htmlFor="passwordlField" className="block text-lg mb-2">Senha</label>
          <input className="w-full p-2 rounded-md text-lg bg-gray-800 border-gray-600 outline-yellow-500" type="password" id="passwordField" />
        </div>
        <div>
          <button className="mt-8 text-center w-full p-1 rounded-md bg-yellow-500">Entrar</button>
        </div>

        <div className=" mt-6 text-center text-gray-400">
          Nâo é membro? <a className="text-yellow-500 font-bold" href="">Faça seu cadastro agora</a>
        </div>
      </div>

    </div >





  )



}
export default Page;