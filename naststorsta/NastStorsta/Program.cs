using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace NastStorsta
{
    class Program
    {
        static void Main(string[] args)
        {
            // Variabler
            int count = 10;
            int inputValue;
            int maxValue = 0;
            int secondMaxValue = 0;

            Console.WriteLine("Mata in {0} heltal:\n", count);

            // En for-loop för att mata in värdena 
            for (int i = 0; i < count; i++)
            {
                Console.Write("{0}: ", i + 1);
                inputValue = int.Parse(Console.ReadLine());
                
                // Om maxvärdet är mindre än det inskrivna värdet
                // Det näst högsta värdet är lika med maxvärdet
                // Medan maxvärdet nu blir det nya inskrivna värdet

                if (maxValue <= inputValue)
                {
                    secondMaxValue = maxValue;
                    maxValue = inputValue; 
                }
                // Annars om det näst största värdet är mindre än det inskrivna värdet
                // Det näst stösta värdet är lika med det inskrivna värdet
                else if (secondMaxValue < inputValue)
                {
                    secondMaxValue = inputValue; 
                }
            }

            Console.WriteLine("\nDet näst största talet är {0}", secondMaxValue);

            /*
            // Variabler
            int count = 5;
            string input;
            int number;

            // Skapar en tom lista
            // Källa http://msdn.microsoft.com/en-us/library/9ct4ey7x(v=vs.90).aspx
            System.Collections.Generic.List<string> numbers = new System.Collections.Generic.List<string>();

            
            Console.WriteLine("Mata in {0} heltal: ", count);

            // Låter användaren fylla i en tal och lägger sedan till talet i listan
            for (int i = 0; i < count; i++)
            {
                Console.Write("{0}: ", i + 1);
                numbers.Add(Console.ReadLine());

            }

            // Sorterar listan och skriver ut det näst största talet
            // Källa: http://stackoverflow.com/questions/22872592/find-the-second-max-in-a-list-of-values-using-linq-c-sharp
            int secondMax = int.Parse(numbers.OrderByDescending(r => r).Skip(1).FirstOrDefault());
            Console.WriteLine("\n{0}", secondMax);
             */
        }
    }
}
