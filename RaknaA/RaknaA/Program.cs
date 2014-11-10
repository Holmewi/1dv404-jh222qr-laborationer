using System;
using System.IO;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RaknaA
{
    class Program
    {
        static void Main(string[] args)
        {
            string line;
            int count = 0;
            char char1;
            char char2;

            Console.Write("Mata in en textrad: ");
            line = Console.ReadLine();

            Console.Write("\nSkriv in bokstav 1: ");
            char1 = Char.Parse(Console.ReadLine());

            Console.Write("Skriv in bokstav 2: ");
            char2 = Char.Parse(Console.ReadLine());

            //Källa: http://stackoverflow.com/questions/541954/how-would-you-count-occurrences-of-a-string-within-a-string
            count = line.Count(c => c == char1);
            Console.WriteLine("\nAntal {0}: {1}", char1, count);

            count = line.Count(c => c == char2);
            Console.WriteLine("Antal {0}: {1}", char2, count);



            /*
            // Variabler
            string line;
            char uppecase = 'A';
            char lowercase = 'a';
            int count = 0;

            // Skiva en sträng
            Console.WriteLine("Mata in en textrad:");
            line = Console.ReadLine();

            // Räkna a och A från strängen
            // Skriv ut resultats
            if (line.Contains(lowercase) || line.Contains(uppecase))
            {
                if (line.Contains(lowercase))
                {
                    count = line.Split(lowercase).Length - 1;
                    Console.WriteLine("Antal {0}: {1}", lowercase, count);
                    count = 0;
                }
                else if (!line.Contains(lowercase))
                {
                    Console.WriteLine("Inga {0}!", lowercase);
                }
                if (line.Contains(uppecase))
                {
                    count = line.Split(uppecase).Length - 1;
                    Console.WriteLine("Antal {0}: {1}", uppecase, count);
                    count = 0;
                }
                else if (!line.Contains(uppecase))
                {
                    Console.WriteLine("Inga {0}!", uppecase);
                }
            }
            else
            {
                Console.WriteLine("Det finns inga bokstäver som stämmer överens");
            }
             */

            


            

            
            

            
            
        }
    }
}
