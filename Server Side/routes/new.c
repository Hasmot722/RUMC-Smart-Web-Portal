#include<stdio.h>

int main()
{
    int a;
    scanf("%d", &a);

    if(a%5==0 && a%7==0)
    {
        printf("Divided by both");
    }
    else if(a%5==0 && a%7!=0)
    {
        printf("Divided by 5 but not by 7");
    }
    else if(a%5!=0 && a%7==0)
    {
        printf("Divided by 7 but not by 5");
    }
    else{
        printf("Not divided by 5 and 7");
    }
}