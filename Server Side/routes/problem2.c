#include <stdio.h>

int main()
{
    int a, b, c;
    scanf("%d %d %d", &a, &b, &c);

    if(a>b && a<c)
    {
        printf("%d is larger", a);
    }

    else if(b>a && b<c)
    {
        printf("%d is 2nd larger", b);
    }

    else
    {
        printf("%d is larger", c);
    }

    return 0;
}