#include <stdio.h>

int main()
{
    int i = 1;
    int sum = 0;

    do
    {
        sum = sum + i;
        printf("The sum is: %d\n", sum);
        i++;
    } 
    while (i <= 100);
}