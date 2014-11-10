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
            int number;
            int count = 0;

            // Skriv in ett tal
            Console.Write("Mata in ett heltal: ");
            number = int.Parse(Console.ReadLine());

            Console.WriteLine("Nollor: {0}", Zero(number, count));

            Console.WriteLine("Udda: {0}", OddNumbers(number, count));

            Console.WriteLine("Jämna: {0}", EvenNumbers(number, count));
            // Räkna ut antal udda siffror


            
        }
        // Räkna ut antal nollor
        static int Zero(int number, int count)
        {
            string myString = number.ToString();
            count = myString.Split('0').Length - 1;
            return count;
        }

        // Räkna ut antal udda siffror
        // Källa: http://stackoverflow.com/questions/19482500/how-to-loop-through-an-array-thats-been-created-from-user-input-c-sharp
        static int OddNumbers(int number, int count)
        {
            count = 0;
            foreach (int i in SplitNumber(number))
            {
                if (i % 2 == 0 && i != 0)
                {
                    ++count;
                }
            }
            return count;
        }

        // Räkna ut antal jämna
        static int EvenNumbers(int number, int count)
        {
            throw new NotImplementedException();
        }

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
    }
}
