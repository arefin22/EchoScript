"use client"
import Title from '@/components/shared/ReusableComponents/Title';
import { useAuth } from '@/context/authContext';
import Image from 'next/image';

const HistoryPage = () => {
    const {user } =useAuth();
    return (
        <div>
            <div className='text-center mx-auto h-14'>
                <h1 className='text-[20px]'>History of <span className='text-[20px] text-green-500'>{user.displayName}</span> </h1>
            </div>
           
            <div className='w-full mx-auto mt-9'>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>History</th>
        <th>Tittle</th>
        <th>Date</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
     
      <tr>
       
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <Image src={user.photoURL || ''} alt="
                history" width={20} height={20} />
              </div>
            </div>
            <div>
              <div className="font-bold">Hart Hagerty</div>
             
            </div>
          </div>
        </td>
        <td>
         Title
        </td>
        <td>time</td>
        <th>
          <button className="btn btn-ghost btn-xs">delete</button>
        </th>
      </tr>
<<<<<<< HEAD
      
=======
      {/* row 2 */}
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
              <Image src={user.photoURL || ''} alt="
                history" width={20} height={20} />
              </div>
            </div>
            <div>
              <div className="font-bold">Brice Swyre</div>
              <div className="text-sm opacity-50">China</div>
            </div>
          </div>
        </td>
        <td>
          Carroll Group
          <br/>
          <span className="badge badge-ghost badge-sm">Tax Accountant</span>
        </td>
        <td>Red</td>
        <th>
          <button className="btn btn-ghost btn-xs">details</button>
        </th>
      </tr>
     
>>>>>>> e1ffb5a15b51727bdcdedb2801f63db6fe35a474
      
    </tbody>
    {/* foot */}
   
    
  </table>
</div>

            </div>
        </div>
    );
};

export default HistoryPage;