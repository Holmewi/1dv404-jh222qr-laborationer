using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RaknaSiffror
{
    class Program
    {
        static void Main(string[] args)
        {
            // Variabler
            int number = 0;
            int count = 0;
            string myString;

            // Skriv in ett tal
            Console.Write("Mata in ett heltal: ");
            number = int.Parse(Console.ReadLine());

            myString = number.ToString();

            Console.WriteLine("Nollor: {0}", Zero(number, count, myString));

            Console.WriteLine("Udda: {0}", OddNumbers(number, count, myString));

            Console.WriteLine("Jämna: {0}", EvenNumbers(number, count, myString));   
        }
        
        // Räkna ut antal nollor
        static int Zero(int number, int count, string myString)
        {
            count = myString.Split('0').Length - 1;
            return count;
        }

        // Räkna ut antal udda siffror
        static int OddNumbers(int number, int count, string myString)
        {
            count = myString.Split('1', '3', '5', '7', '9').Length - 1;
            return count;
        }

        // Räkna ut antal udda siffror
        static int EvenNumbers(int number, int count, string myString)
        {
            count = myString.Split('2', '4', '6', '8').Length - 1;
            return count;
        }


        /*
        // Räkna ut antal udda siffror
        // Obsolet källa: http://stackoverflow.com/questions/19482500/how-to-loop-through-an-array-thats-been-created-from-user-input-c-sharp
        // Källa: https://www.physicsforums.com/threads/converting-integer-into-array-of-single-digits-in-c.558588/
        static int OddNumbers(int number, int count)
        {
            int[] digits = number.ToString().ToCharArray().Select(Convert.ToInt32).ToArray();

            for (int i = 0; i > digits.Length; i++)
            {
                if(digits[i] % 2 == 0)
                {
                    count++;
                }
            }
                return count;
        }

        // Räkna ut antal jämna
        static int EvenNumbers(int number, int count)
        {
            throw new NotImplementedException();
        }

        /*
        // Delar upp talet i enskilda siffror
        // Källa http://stackoverflow.com/questions/4808612/how-to-split-a-number-into-individual-digits
        static int[] SplitNumber(int number)
        {
            List<int> list = new List<int>();
            while(number > 0)
            {
                list.Add(number % 10);
                number = number / 10;
            }
            list.Reverse();
            return list.ToArray();
        }
         */
       
    }
}
