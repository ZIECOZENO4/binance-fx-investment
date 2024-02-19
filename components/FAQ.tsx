"use client"
import { Accordion, AccordionContent, AccordionPanel, AccordionTitle } from 'flowbite-react';

export default function FAQ() {
  return (
    <Accordion collapseAll>
            <div className=" text-white justify-center align-middle text-3xl  md:text-[4rem] font-extrabold font-serif p-2">Frequent questions ?</div>
      <AccordionPanel>
        <AccordionTitle>What is Binance Fx?</AccordionTitle>
        <AccordionContent>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
           Binance FX is a crypto investment and trading platform.
          </p>
       
        </AccordionContent>
      </AccordionPanel>
      <AccordionPanel>
        <AccordionTitle>HOW CAN I REGISTER A NEW ACCOUNT?</AccordionTitle>
        <AccordionContent>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
          To register a new account, simply click the &quot;Register New Account&quot; button or &quot;Sign Up&quot; link and fill out the required information.
          </p>
          <p className="text-gray-500 dark:text-gray-400">
   Then visit your dashboard to get started
          </p>
        </AccordionContent>
      </AccordionPanel>
      <AccordionPanel>
        <AccordionTitle>What are the differences between Flowbite and Tailwind UI?</AccordionTitle>
        <AccordionContent>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            The main difference is that the core components from Flowbite are open source under the MIT license, whereas
            Tailwind UI is a paid product. Another difference is that Flowbite relies on smaller and standalone
            components, whereas Tailwind UI offers sections of pages.
          </p>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            However, we actually recommend using both Flowbite, Flowbite Pro, and even Tailwind UI as there is no
            technical reason stopping you from using the best of two worlds.
          </p>
          <p className="mb-2 text-gray-500 dark:text-gray-400">Learn more about these technologies:</p>
          <ul className="list-disc pl-5 text-gray-500 dark:text-gray-400">
            <li>
              <a href="https://flowbite.com/pro/" className="text-cyan-600 hover:underline dark:text-cyan-500">
                Flowbite Pro
              </a>
            </li>
            <li>
              <a
                href="https://tailwindui.com/"
                rel="nofollow"
                className="text-cyan-600 hover:underline dark:text-cyan-500"
              >
                Tailwind UI
              </a>
            </li>
          </ul>
        </AccordionContent>
      </AccordionPanel>
      <AccordionPanel>
        <AccordionTitle>WHAT IS THE MINIMUM AND MAXIMUM AMOUNT FOR DEPOSIT?</AccordionTitle>
        <AccordionContent>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
          The minimum deposit amount is $50, the maximum you can deposit at one time is $500,000 Per each deposit, Surely you can make deposit higher than $500,000 by several deposits.
          </p>
        </AccordionContent>
      </AccordionPanel>
      <AccordionPanel>
        <AccordionTitle> WHAT IS THE MINIMUM AND MAXIMUM AMOUNT FOR WITHDRAWAL?</AccordionTitle>
        <AccordionContent>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
          minimum is $10 and maximum withdraw is Unlimited.
          </p>
        </AccordionContent>
      </AccordionPanel>
      <AccordionPanel>
        <AccordionTitle>HOW DO I REQUEST A WITHDRAWAL?
</AccordionTitle>
        <AccordionContent>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
You can request a withdrawal by clicking the &quot;Withdraw&quot; button in the member&#39;s area and entering the amount you want to withdraw.
          </p>
 
        </AccordionContent>
      </AccordionPanel>
      <AccordionPanel>
        <AccordionTitle>ARE THERE ANY WITHDRAWAL FEES?
</AccordionTitle>
        <AccordionContent>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
    No, there are no fees for withdrawal.
          </p>
        </AccordionContent>
      </AccordionPanel>
      <AccordionPanel>
        <AccordionTitle>HOW LONG DOES IT TAKE FOR MY WITHDRAWAL TO BE SENT?

</AccordionTitle>
        <AccordionContent>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
    Your withdrawal is sent Instant after it is requested.
          </p>
  
        </AccordionContent>
      </AccordionPanel>
      <AccordionPanel>
        <AccordionTitle> HOW CAN I CHANGE MY PAYMENT ADDRESS?
</AccordionTitle>
        <AccordionContent>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
 You can change your payment withdrawal address by clicking the
&quot;Settings&quot; button on the menu after logging in to your account. Enter your new payment address and save the changes.
          </p>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            However, we actually recommend using both Flowbite, Flowbite Pro, and even Tailwind UI as there is no
            technical reason stopping you from using the best of two worlds.
          </p>
          <p className="mb-2 text-gray-500 dark:text-gray-400">Learn more about these technologies:</p>
          <ul className="list-disc pl-5 text-gray-500 dark:text-gray-400">
            <li>
              <a href="https://flowbite.com/pro/" className="text-cyan-600 hover:underline dark:text-cyan-500">
                Flowbite Pro
              </a>
            </li>
            <li>
              <a
                href="https://tailwindui.com/"
                rel="nofollow"
                className="text-cyan-600 hover:underline dark:text-cyan-500"
              >
                Tailwind UI
              </a>
            </li>
          </ul>
        </AccordionContent>
      </AccordionPanel>
      <AccordionPanel>
        <AccordionTitle>HOW CAN I CHANGE MY ACCOUNT E-MAIL?
</AccordionTitle>
        <AccordionContent>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
           For security reasons, we do not allow users to change their e-mail after registration. If you would like to change your e-mail, please contact our support and we will change it for you.
          </p>
        </AccordionContent>
      </AccordionPanel>
        <AccordionPanel>
        <AccordionTitle>+ DO I NEED TO MAKE A DEPOSIT TO REFER NEW MEMBERS?


</AccordionTitle>
        <AccordionContent>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
       No, you do not need to make a deposit to take part in our referral program.
          </p>
        </AccordionContent>
      </AccordionPanel>
        <AccordionPanel>
        <AccordionTitle>HOW CAN I SEE WHO MY UPLINE IS?


</AccordionTitle>
        <AccordionContent>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
        You can see your upline by clicking on &quot;Referrals&quot;, and you will see the username of your upline. If there is no username there, it means you have no upline.
          </p>
        </AccordionContent>
      </AccordionPanel>
        <AccordionPanel>
        <AccordionTitle>HOW CAN I CONTACT YOUR SUPPORT?
</AccordionTitle>
        <AccordionContent>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
     You can contact our support through clicking the &quot;Contact Us&quot; link. We offer support through Contact Form, and E-mail.
          </p>
        </AccordionContent>
      </AccordionPanel>
    </Accordion>
  );
}
