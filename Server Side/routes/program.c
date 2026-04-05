#include <stdio.h>

int main()
{
    int a,b,c; //Declaration
    float sum;
    scanf("%d %d %d", &a, &b, &c); //Take Value

    sum = a*b*c; //Addition
    printf("The sum is: %f \n", sum); //Show the sum

    float average; //Declaration
    average = sum/3;

    printf("The average is: %f", average);

    return 0;
}
