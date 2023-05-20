
const ErrorPage = () => {
    return (
        <div className=" flex justify-center items-center mt-12">
        <div className='text-5xl shadow-lg p-10 rounded-lgs text-red-800 flex items-center justify-center  gap-5 md:gap-10'>
        <div className="">
        <h2 className='font-bold mb-2'>404 Not Found</h2>
        <p>Something went <br /><span className='font-bold'>Wrong!!</span></p>
        </div>
        <div className="">
          <img src="https://img.freepik.com/free-vector/man-thinking-concept-illustration_114360-7920.jpg?t=st=1681201234~exp=1681201834~hmac=d0c1be2c5feeb2cf783482ce8d6c188d77391c1bd92d8fc13bdf25953e91e71e" className='w-72 h-72' alt="" />
        </div>
      </div>
    </div>
    );
};

export default ErrorPage;