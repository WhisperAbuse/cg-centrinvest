import { FC } from 'react';
import Input from '../components/Input';

interface IProps {
  className?: string;
}

const LoginPage: FC<IProps> = ({ className }) => {
  return (
    <div className={''}>
      <header>
        <nav className="w-full px-10 py-5 text-3xl text-white bg-green-600">
          <p>Центр-Навыки</p>
        </nav>
      </header>
      <div className="min-h-screen bg-gray-50">
        <div className="py-20">
          <div className="w-full max-w-sm p-8 mx-auto bg-white border border-gray-200 border-solid rounded-md shadow-md">
            <div className="flex flex-col gap-3 ">
              <Input type="text" label={'Логин или идентификатор'} />
              <Input type="password" label={'Пароль'} />
              <label className="flex items-center gap-2">
                <input type="checkbox" className="bg-white" />
                Запомнить логин
              </label>
            </div>
            <button className="w-full p-2 mt-5 font-semibold text-white bg-green-600 rounded">
              Войти
            </button>
            <p className="mt-2 text-sm text-green-500 cursor-pointer hover:underline">
              Забыли пароль?
            </p>
            <div className="mt-3 border-t border-gray-300 border-solid">
              <p className="mt-1 mb-2 font-semibold text-gray-700">
                Войти через соцсеть
              </p>
              <div className="grid grid-cols-2 gap-2">
                <button className="px-5 py-1.5 rounded bg-blue-700 text-white font-semibold ">
                  ВКонтакте
                </button>
                <button className="px-5 py-1.5 rounded bg-orange-500 text-white font-semibold">
                  Одноклассники
                </button>
                <button className="px-5 py-1.5 rounded bg-blue-900 text-white font-semibold">
                  Facebook
                </button>
                <button className="px-5 py-1.5 rounded bg-blue-400 text-white font-semibold">
                  Twitter
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
