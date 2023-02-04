# Smith Normal Form (Unix)
There already exists packages built for python to transform matrices into Smith Normal Form. There are two packages can be used: <mark>sympy</mark> and <mark>smithnormalform</mark>. 
## sympy
To install it, just copy and paste the following code to the terminal (Unix only, windows is a little different). 
```
% python3 -m pip install sympy
```
If you are using python2, you probably could simply replace code python3 to python2. 

(The package will be installed through pip. If your python was installed via Homebrew, pip should be already included. Use the following code to check the pip version.)

```
% python3 -m pip --version
```
We will use **Matrix, ZZ** form **sympy**, and **smith_normal_form** from **sympy.matrices.normalforms**.

```python3
>>> from sympy import Matrix, ZZ
>>> from sympy.matrices.normalforms import smith_normal_form
```

For instance, to get the smith normal form of a $2\times 3$ matrix $A$ with entries $1, 2, 3, 4, 5, 6$. 

```python3
>>> A = Matrix([[1, 2, 3], [4, 5, 6]])
>>> smith.normal_form(A)
Matrix([
[1,  0, 0],
[0, -3, 0]])
```
[Click here for more information](https://docs.sympy.org/latest/modules/matrices/normalforms.html)

## smithnormalform

Another package is "smithnormalform" and the latest version should be "0.6.0". 
To install the package, copy and paste the follwoing code in terminal (Unix only). 

```
% python3 -m pip install smithnormalform
```


We will use <mark >matrix</mark>, <mark >snfporblem</mark> and  <mark >z</mark> from <mark>smithnormaform</mark>. Use the following code to import them. 

```python3
>>> from smithnormalform import matrix, snfproblem, z
```
The way to denote a matrix here is different from using numpy. The first two entries should be used to determine the size of the matrix. The numbers in the [ ] are the entries of the matrix. We can denote a $2\times 3$ matrix $A$ by following code, 

```python3
>>>  A = matrix.Matrix(2, 3, [z.Z(1), z.Z(2), z.Z(3), z.Z(4), z.Z(5), z.Z(6)])
>>> print(A)
[1 2 3]
[4 5 6]
```
To compute the smith normal form, $D$, 

```python3
>>> prob = snfproblem.SNFProblem(A)
>>> prob.computeSNF()
>>> print(prob.J)
[-1 0 0]
[0 -3 0]
```
Now, we can tell that **the smith normal form of a matrix is not unqiue**. But it is unique up to signs. 

The good thing about package smithnormalform is we can get $U$ and $V$ such that 
$$
U\cdot D\cdot V = A. 
$$
```
>>> print(prob.S)
[ 1 2 ]
[ 3 4 ]
>>> print(prob.J)
[ -2 1 ]
[ 3 -1 ]
>>> print(prob.S * prob.A * prob.T == prob.J)
True
```


