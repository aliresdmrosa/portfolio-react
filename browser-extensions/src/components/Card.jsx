import Toggle from "./Toggle";
import Button from "./Button";
export default function Card({ title, description, isActive, logo , setIsActive, handleRemove}) {

  return (
    <div className="shadow bg-neutral-50 dark:bg-neutral-800 rounded-xl p-4 m-1 max-w-[380px] min-h-[200px]">
      <div className="flex items-start gap-3 mb-5 min-h-[100px]">
        <img src={logo} alt="" />
        <div>
          <h3 className="dark:text-white text-neutral-900 font-semibold text-lg">{title}</h3>
          <p className="dark:text-gray-300  text-neutral-500 text-sm">{description}</p>
        </div>
      </div>
      <div className="flex items-center justify-between mt-6">
        
        <Button title='Remover' handle={handleRemove} />
        <Toggle enabled={isActive} setEnabled={setIsActive} />
      </div>
    </div>
  );
}
