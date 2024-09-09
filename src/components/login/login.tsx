'use client';

import * as React from 'react';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useForm, SubmitHandler } from "react-hook-form";
import { useUser } from '@/context/UserContext';
import { useRouter } from 'next/navigation';

type FormDataLogin = {
    username: string;
    password: string;
    email?: string;
};

type FormDataSignup = {
    username: string;
    password: string;
    email: string;
};

type FormData = FormDataLogin | FormDataSignup;

export function DialogLogin() {
    const [formType, setFormType] = React.useState<'login' | 'signup'>('login');
    const { register, handleSubmit, formState: { errors } } = useForm<FormData>();
    const { setUserData } = useUser();
    const router = useRouter();

    const onSubmitLogin: SubmitHandler<FormDataLogin> = (data) => {
        setUserData({ username: data.username });
        console.log(data);        
        router.push('/feed');
    };

    const onSubmitSignup: SubmitHandler<FormDataSignup> = (data) => {
        setUserData({ username: data.username, email: data.email });
        console.log(data);        
        router.push('/feed');
    };

    // Function to check if the current form type is signup
    const isSignup = formType === 'signup';

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="default" className="w-32" onClick={() => setFormType('signup')}>Inscreva-se</Button>
            </DialogTrigger>
            <p>ou</p>
            <DialogTrigger asChild>
                <Button variant="default" className="w-32" onClick={() => setFormType('login')}>Entrar</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>{isSignup ? 'Inscreva-se' : 'Entrar'}</DialogTitle>
                    <DialogDescription>
                        {isSignup ? 'Crie uma conta fornecendo suas informações.' : 'Informe seu usuário e sua senha.'}
                    </DialogDescription>
                </DialogHeader>
                <form onSubmit={handleSubmit(isSignup ? onSubmitSignup : onSubmitLogin)}>
                    <div className="grid gap-4 py-4">
                        <div className="space-y-1">
                            <Label htmlFor="username" className="text-right">
                                Usuário
                            </Label>
                            <Input
                                id="username"
                                type="text"
                                placeholder="Digite seu usuário ou e-mail"
                                {...register('username', { required: 'Campo obrigatório.' })}
                            />
                            {errors.username && <p className="text-red-500 text-sm px-1 mt-0.5">{errors.username.message}</p>}
                        </div>

                        {isSignup && (
                            <div className="space-y-1">
                                <Label htmlFor="email" className="text-right">
                                    E-mail
                                </Label>
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="Digite seu e-mail"
                                    {...register('email', { required: 'Campo obrigatório.' })}
                                />
                                {errors.email && <p className="text-red-500 text-sm px-1 mt-0.5">{errors.email.message}</p>}
                            </div>
                        )}

                        <div className="space-y-1">
                            <Label htmlFor="password" className="text-right">
                                Senha
                            </Label>
                            <Input
                                id="password"
                                type="password"
                                placeholder="Digite sua senha"
                                {...register('password', { required: 'Campo obrigatório.' })}
                            />
                            {errors.password && <p className="text-red-500 text-sm px-1 mt-0.5">{errors.password.message}</p>}
                        </div>
                    </div>
                    <DialogFooter>
                        <Button type="submit">{isSignup ? 'Cadastrar' : 'Entrar'}</Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
}

export default DialogLogin;
