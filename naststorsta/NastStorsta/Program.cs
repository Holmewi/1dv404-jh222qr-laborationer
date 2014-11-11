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
            int number = 0;
            int count = 3;
            string input;
            //Källa http://msdn.microsoft.com/en-us/library/9ct4ey7x(v=vs.90).aspx
            System.Collections.Generic.List<string> numbers = new System.Collections.Generic.List<string>();

            
            Console.WriteLine("Mata in {0} heltal: ", count);

            for (int i = 0; i < count; i++)
            {
                Console.Write("{0}: ", i + 1);
                input = Console.ReadLine();
                numbers.Add(input);

            }

            //Numbers(number, count);
            foreach (string ingredient in numbers)
            {
                System.Console.Write(ingredient);
            }
        }
    }
}
